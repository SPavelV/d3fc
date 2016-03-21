import babel from 'rollup-plugin-babel';

export default {
    entry: 'index.js',
    moduleName: 'fc_datajoin',
    format: 'umd',
    plugins: [ babel() ],
    dest: 'build/d3fc-data-join.js',
    globals: {
        'd3': 'd3'
    }
};
