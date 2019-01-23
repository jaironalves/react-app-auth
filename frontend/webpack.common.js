import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default (options) => {
    return {        
        mode: options.mode,
        module: {
            rules:
                [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader'
                    ],
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        options.cssStyleLoader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                    use: [
                        {
                            loader: options.fileLoader
                        },
                    ]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'React App',
                template: './public/index.html',
                filename: './index.html'
            }),
            new CopyWebpackPlugin([{ from: 'src/assets' }])
        ]
    }
}