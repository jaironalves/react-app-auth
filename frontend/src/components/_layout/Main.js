import React, { Component } from 'react'
import Header from './MainHeader'
import Footer from './MainFooter';

class Main extends Component {
    render() {
        return (
            <main>
                <Header />                      
                <div className="container">
                    {this.props.children}
                </div>
                <Footer />
            </main>
        )
    }
}

export default Main
