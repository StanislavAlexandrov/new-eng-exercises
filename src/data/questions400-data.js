const DATA = [
    { question: 'обвинить (a-)', answer: 'accuse' },
    { question: 'смежный (a-)', answer: 'adjacent' },
    { question: 'подростковый (a-)', answer: 'adolescent' },
    { question: 'пришествие, приход (a-)', answer: 'advent' },
    { question: 'выступать за (a-)', answer: 'advocate' },
    { question: 'богатство (a-)', answer: 'affluence' },
    { question: 'усугублять (a-)', answer: 'aggravate' },
    { question: 'якобы (a-)', answer: 'allegedly' },
    { question: 'верность (a-)', answer: 'allegiance' },
    { question: 'распределять, выделять (a-)', answer: 'allocate' },
    { question: 'двусмысленный (a-)', answer: 'ambiguous' },
    { question: 'изменять что-то (a-)', answer: 'amend' },
    { question: 'вершина (a-)', answer: 'apex' },
    { question: 'задержать, установить (a-)', answer: 'apprehend' },
    { question: 'произвольный (a-)', answer: 'arbitrary' },
    { question: 'высокомерно (a-)', answer: 'arrogantly' },
    { question: 'устанавливать (a-)', answer: 'ascertain' },
    { question: 'нападать (a-)', answer: 'assail' },
    { question: 'оценивать (as-)', answer: 'assess' },
    { question: 'увеличить (a-)', answer: 'augment' },
    { question: 'бросать (взгляд) (c-)', answer: 'cast' },
    { question: 'учебный план (c-)', answer: 'curriculum' },
    { question: 'лечение (c-)', answer: 'cure' },
    { question: 'громоздкий (c-)', answer: 'cumbersome' },
    { question: 'противопоставить (c-)', answer: 'counter' },
    { question: 'осужденный (c-)', answer: 'convict' },
    { question: 'передавать (мысль) (c-)', answer: 'convey' },
    { question: 'вопреки (c-)', answer: 'contrary' },
    { question: 'конкурс (c-)', answer: 'contest' },
    { question: 'презрительный (c-)', answer: 'contemptuous' },
    { question: 'загрязнение (c-)', answer: 'contamination' },
    { question: 'ограничение (c-)', answer: 'constraint' },
    { question: 'завоевание (c-)', answer: 'conquest' },
    { question: 'прекратить (c-)', answer: 'cease' },
    { question: 'оптом, много (b-)', answer: 'bulk' },
    { question: 'взяточничество (b-)', answer: 'bribery' },
    { question: 'связь (bo-)', answer: 'bond' },
    { question: 'горько (b-)', answer: 'bitterly' },
    { question: 'предвзято (b-)', answer: 'biased' },
    { question: 'ругать (be-)', answer: 'berate' },
    { question: 'ругать (be-)', answer: 'berate' },
    { question: 'с отклонениями (d-)', answer: 'deviant' },
    { question: 'придумать (d-)', answer: 'devise' },
    { question: 'преданность (d-)', answer: 'devotion' },
    { question: 'уменьшить (d-)', answer: 'diminish' },
    { question: 'избавиться от (d- of)', answer: 'dispose' },
    { question: 'сделать выжимку (di-)', answer: 'distill' },
    { question: 'искажать (d-)', answer: 'distort' },
    { question: 'разнообразный (d-)', answer: 'diverse' },
    { question: 'гадание (d-)', answer: 'divination' },
    { question: 'снижаться (d-)', answer: 'decline' },
    { question: 'дряхлый (d-)', answer: 'decrepit' },
    { question: 'обожествлять (d-)', answer: 'deify' },
    { question: 'преступность (d-)', answer: 'delinquency' },
    { question: 'знаменатель (d-)', answer: 'denominator' },
    { question: 'отрицать (d-)', answer: 'deny' },
    { question: 'истощать (d-)', answer: 'deplete' },
    { question: 'происходить от (d- from)', answer: 'derive' },
    { question: 'потомок (d-)', answer: 'descendant' },
    { question: 'презирать (d-)', answer: 'despise' },
    { question: 'задержать (преступника) (d-)', answer: 'detain' },
    { question: 'вымирание (e-)', answer: 'extinction' },
    { question: 'голод (f-)', answer: 'famine' },
    { question: 'возможно, осуществимо (f-)', answer: 'feasibly' },
    { question: 'удобрять (f-)', answer: 'fertilize' },
    { question: 'колебаться (f-)', answer: 'fluctuate' },
    {
        question: 'криминалистика, судебная экспертиза (f-)',
        answer: 'forensics',
    },
    { question: 'укрепить (f-)', answer: 'fortify' },
    { question: 'окаменеть (f-)', answer: 'fossilize' },
    { question: 'бахрома, периферия (f-)', answer: 'fringe' },
    { question: 'выброс (e-)', answer: 'emission' },
    { question: 'капитал (e-)', answer: 'equity' },
    { question: 'извержение (e-)', answer: 'eruption' },
    { question: 'уклоняться (e-)', answer: 'evade' },
    { question: 'доказательство (e-)', answer: 'evidence' },
    { question: 'оперативно (e-)', answer: 'expeditiously' },
    { question: 'эксплуатировать (e-)', answer: 'exploit' },
    {
        question: 'в геометрической прогрессии (e- from)',
        answer: 'exponentially',
    },
    { question: 'торговаться (h-)', answer: 'haggle' },
    { question: 'преследовать (h-)', answer: 'haunt' },
    { question: 'опасный (h-)', answer: 'hazardous' },
    { question: 'унижение (h-)', answer: 'humiliation' },
    { question: 'лицемерно (h-)', answer: 'hypocritically' },
    { question: 'неграмотный (i-)', answer: 'illiterate' },
    { question: 'влияние (im-)', answer: 'impact' },
    { question: 'ухудшать (imp-)', answer: 'impair' },
    { question: 'осуществлять (i-)', answer: 'implement' },
    { question: 'подразумевать, (imp-)', answer: 'implicate' },
    { question: 'неявно, косвенно (imp-)', answer: 'implicitly' },
    { question: 'обеднять (i-)', answer: 'impoverish' },
    { question: 'стимул (in-)', answer: 'incentive' },
    { question: 'бесспорный (i-)', answer: 'indisputable' },
    { question: 'трудолюбивый (in-)', answer: 'industrious' },
    { question: 'заключение, вывод (inf-)', answer: 'inference' },
    { question: 'бесконечно малый (in-)', answer: 'infinitesimal' },
    { question: 'изобретательный, хитроумный (in-)', answer: 'ingenious' },
    { question: 'присущий, свойственный (i-)', answer: 'inherent' },
    { question: 'наследство, наследование (i-)', answer: 'inheritance' },
    { question: 'подавлять, препятствовать (in-)', answer: 'inhibit' },
    { question: 'надпись (i-)', answer: 'inscription' },
    { question: 'целостность, честность (i-)', answer: 'integrity' },
    { question: 'усиливаться (i-)', answer: 'intensify' },
    { question: 'вмешиваться (in-)', answer: 'intervene' },
    { question: 'неустрашимый, бесстрашный (in-)', answer: 'intrepid' },
    { question: 'навязчиво, назойливо (intr-)', answer: 'intrusively' },
    { question: 'захватнический (inv-)', answer: 'invasive' },
    { question: 'вызывать (inv-)', answer: 'invoke' },
    { question: 'совместно (j-)', answer: 'jointly' },
    { question: 'сопоставить, противопоставить (ju-)', answer: 'juxtapose' },
    { question: 'родня, родственники (k-)', answer: 'kin' },
    { question: 'ответственность, обязательство (li-)', answer: 'liability' },
    { question: 'крайний, предельный (m-)', answer: 'marginal' },
    { question: 'среда, носитель (me-)', answer: 'medium' },
    { question: 'торговец, купец (m-)', answer: 'merchant' },
    { question: 'заслуга (m-)', answer: 'merit' },
    { question: 'окружение, обстановка (mil-)', answer: 'milieu' },
    { question: 'заблуждение (m-)', answer: 'misconception' },
    { question: 'вносить изменения (mo-)', answer: 'modify' },
    { question: 'благородство, знать (n-)', answer: 'nobility' },
    { question: 'понятие (no-)', answer: 'notion' },
    { question: 'ядро (nu-)', answer: 'nucleus' },
];

export default DATA;