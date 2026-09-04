const fs = require('fs');

const path = 'c:\\Users\\chiso\\Desktop\\TRIUMPHAL LIFETIME GROUP\\wordpress\\mu-plugins\\tlg-core\\admin.php';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/'services_items'\s*=>\s*\['Services \/ programme items', 'textarea', 'One item per line as Heading \| Description.'\],/, "'services_items' => ['Services / programme items', 'repeater', 'Add items.', ['Heading', 'Description']],");
content = content.replace(/'audience_items'\s*=>\s*\['Who we help items', 'textarea', 'One audience per line, optionally Heading \| Description.'\],/, "'audience_items' => ['Who we help items', 'repeater', 'Add audiences.', ['Heading', 'Description']],");
content = content.replace(/'process_items'\s*=>\s*\['Process steps', 'textarea', 'One step per line as Step title \| Description.'\],/, "'process_items' => ['Process steps', 'repeater', 'Add process steps.', ['Step title', 'Description']],");
content = content.replace(/'benefits_items'\s*=>\s*\['Benefit items', 'textarea', 'One benefit per line as Heading \| Description.'\],/, "'benefits_items' => ['Benefit items', 'repeater', 'Add benefits.', ['Heading', 'Description']],");
content = content.replace(/'future_items'\s*=>\s*\['Future project items', 'textarea', 'One future item per line as Heading \| Description.'\],/, "'future_items' => ['Future project items', 'repeater', 'Add future items.', ['Heading', 'Description']],");
content = content.replace(/'navigation_items'\s*=>\s*\['Primary navigation', 'textarea', 'One link per line as Label \| \/path.'\],/, "'navigation_items' => ['Primary navigation', 'repeater', 'Add navigation links.', ['Label', '/path']],");
content = content.replace(/'division_items'\s*=>\s*\['Division navigation', 'textarea', 'One link per line as Label \| \/path \| \/image\.jpg.'\],/, "'division_items' => ['Division navigation', 'repeater', 'Add division links.', ['Label', '/path', '/image.jpg']],");
content = content.replace(/'footer_divisions'\s*=>\s*\['Footer: Divisions', 'textarea', 'One link per line as Label \| \/path.'\],/, "'footer_divisions' => ['Footer: Divisions', 'repeater', 'Add links.', ['Label', '/path']],");
content = content.replace(/'footer_company'\s*=>\s*\['Footer: Company', 'textarea', 'One link per line as Label \| \/path.'\],/, "'footer_company' => ['Footer: Company', 'repeater', 'Add links.', ['Label', '/path']],");
content = content.replace(/'footer_resources'\s*=>\s*\['Footer: Resources', 'textarea', 'One link per line as Label \| \/path.'\],/, "'footer_resources' => ['Footer: Resources', 'repeater', 'Add links.', ['Label', '/path']],");

// Add repeater logic to render function
const rendererOriginal = `                    <?php elseif ($type === 'select') : ?>`;
const rendererReplacement = `                    <?php elseif ($type === 'repeater') : ?>
                        <?php
                        $columns = $options;
                        $rows = array_filter(array_map('trim', explode("\\n", $value)));
                        ?>
                        <div class="tlg-repeater" data-columns="<?php echo esc_attr(json_encode($columns)); ?>">
                            <div class="tlg-repeater-rows">
                                <?php foreach ($rows as $row) : 
                                    $parts = array_pad(array_map('trim', explode('|', $row)), count($columns), '');
                                ?>
                                    <div class="tlg-repeater-row" style="display:flex; gap:10px; margin-bottom:10px;">
                                        <?php foreach ($columns as $index => $col) : ?>
                                            <input type="text" class="regular-text" placeholder="<?php echo esc_attr($col); ?>" value="<?php echo esc_attr(trim($parts[$index])); ?>">
                                        <?php endforeach; ?>
                                        <button type="button" class="button remove-row">Remove</button>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                            <button type="button" class="button add-row">Add Row</button>
                            <textarea class="tlg-repeater-store" style="display:none;" id="tlg-<?php echo esc_attr($key); ?>" name="tlg_meta[<?php echo esc_attr($key); ?>]"><?php echo esc_textarea($value); ?></textarea>
                        </div>
                        <script>
                        if (!window.tlgRepeaterInit) {
                            window.tlgRepeaterInit = true;
                            document.addEventListener('click', function(e) {
                                if (e.target.classList.contains('add-row')) {
                                    var repeater = e.target.closest('.tlg-repeater');
                                    var cols = JSON.parse(repeater.getAttribute('data-columns'));
                                    var row = document.createElement('div');
                                    row.className = 'tlg-repeater-row';
                                    row.style.display = 'flex';
                                    row.style.gap = '10px';
                                    row.style.marginBottom = '10px';
                                    var html = '';
                                    cols.forEach(function(col) {
                                        html += '<input type="text" class="regular-text" placeholder="' + col + '" value="">';
                                    });
                                    html += '<button type="button" class="button remove-row">Remove</button>';
                                    row.innerHTML = html;
                                    repeater.querySelector('.tlg-repeater-rows').appendChild(row);
                                    updateStore(repeater);
                                }
                                if (e.target.classList.contains('remove-row')) {
                                    var repeater = e.target.closest('.tlg-repeater');
                                    e.target.closest('.tlg-repeater-row').remove();
                                    updateStore(repeater);
                                }
                            });
                            document.addEventListener('input', function(e) {
                                if (e.target.closest('.tlg-repeater-row')) {
                                    updateStore(e.target.closest('.tlg-repeater'));
                                }
                            });
                            function updateStore(repeater) {
                                var rows = repeater.querySelectorAll('.tlg-repeater-row');
                                var val = [];
                                rows.forEach(function(row) {
                                    var inputs = row.querySelectorAll('input');
                                    var parts = [];
                                    inputs.forEach(function(input) { parts.push(input.value.replace(/\\|/g, '')); });
                                    // only push if not completely empty
                                    if (parts.join('').trim() !== '') {
                                        val.push(parts.join(' | '));
                                    }
                                });
                                repeater.querySelector('.tlg-repeater-store').value = val.join('\\n');
                            }
                        }
                        </script>
                    <?php elseif ($type === 'select') : ?>`;

content = content.replace(rendererOriginal, rendererReplacement);

fs.writeFileSync(path, content);
