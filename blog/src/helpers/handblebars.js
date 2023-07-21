const Handlebars = require('handlebars');


module.exports = {
    sum: (a, b) => a + b,
            sortable: (filed, sort) =>{

                const sortType = filed === sort.colum ? sort.type : 'default';
                const icons={
                    default: 'bi bi-chevron-expand',
                    asc: 'bi bi-sort-down',
                    desc: 'bi bi-sort-up',
                };
                const types ={
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortType];
                const type = types[sortType];

                const href = Handlebars.escapeExpression(`?_sort&colum=${filed}&type=${type}`);
                const output = `<a href="${href}">
                            <i class="${icon}"></i>
                        </a>`;
                return new Handlebars.SafeString(output);

            }
}