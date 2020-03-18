// import React, { Component } from 'react';
// import Product from '../Product';

// export default class Pagination extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             userId: 1,
//             data: this.props.data
//         }
//         this.getData = this.getData.bind(this)
//         this.btnClick = this.btnClick.bind(this)
//     }
//     getData() {
//         const { userId } = this.state;
//         this.setState({ data: this.props.data })
//     }
//     componentDidMount() {
//         this.getData()
//     }

//     btnClick(e) {
//         const userId = e.target.value;
//         console.log(userId);
//         this.setState({ userId })
//         this.getData();
//     };

//     render() {
//         const theData = this.state.data.map((d) => {
//             return (
//                 <Product product={d} />
//             )
//         })
//         console.log("data", this.props.data)
//         return (
//             <>
//                 <div className="row">
//                     {theData}
//                 </div>
//                 <UserIdComponent name="1" onClick={this.btnClick} />
//                 <UserIdComponent name="2" onClick={this.btnClick} />
//                 <UserIdComponent name="3" onClick={this.btnClick} />
//                 <UserIdComponent name="4" onClick={this.btnClick} />
//             </>
//         )
//     }
// }

// const UserIdComponent = (props) => {
//     return (
//         <button value={props.name} onClick={props.onClick}>{props.name}</button>
//     )
// };




import React from 'react';
import PropTypes from 'prop-types';
import paginate from 'jw-paginate';

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number,
    maxPages: PropTypes.number,
    labels: PropTypes.object,
    styles: PropTypes.object,
    disableDefaultStyles: PropTypes.bool
}

const defaultProps = {
    initialPage: 1,
    pageSize: 24,
    maxPages: 100,
    labels: {
        first: 'First',
        last: 'Last',
        previous: 'Previous',
        next: 'Next'
    }
}

class JwPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pager: {},
            red: []
        };
        this.styles = {};

        if (!props.disableDefaultStyles) {
            this.styles = {
                ul: {
                    margin: 0,
                    padding: 0,
                    display: 'inline-block'
                },
                li: {
                    listStyle: 'none',
                    display: 'inline',
                    textAlign: 'center'
                },
                a: {
                    cursor: 'pointer',
                    padding: '6px 12px',
                    display: 'block',
                    float: 'left'
                }
            }
        }

        // merge custom styles with default styles
        if (props.styles) {
            this.styles = {
                ul: { ...this.styles.ul, ...props.styles.ul },
                li: { ...this.styles.li, ...props.styles.li },
                a: { ...this.styles.a, ...props.styles.a }
            };
        }
    }

    UNSAFE_componentWillMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("props", this.props.name)
        if (this.props.name !== prevProps.name) {
            this.setPage(this.props.initialPage)
        }
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }


    setPage(page) {
        var { items, pageSize, maxPages } = this.props;
        console.log("Hello", this.props)
        var pager = this.state.pager;
        console.log("Hello1", this.state.pager)


        // get new pager object for specified page
        pager = paginate(items.length, page, pageSize, maxPages);

        // get new page of items from items array
        var red1 = items.slice(pager.startIndex, pager.endIndex + 1);
        let pageOfItems = items.filter((a) => {
            return a.category === this.props.name
        });
        let red = pageOfItems.slice(pager.startIndex, pager.endIndex + 1)
        console.log("MAP", red1)
        // this.setState({ red: red1 })
        console.log("MAPA", red)

        // update state
        this.setState({ pager: pager });

        // call change page function in parent component
        if (this.props.name === 'all') {
            this.props.onChangePage(red1);
        } else {
            this.props.onChangePage(red);
        }
    }

    render() {
        var pager = this.state.pager;
        var labels = this.props.labels;
        var styles = this.styles;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <ul className="pagination" style={styles.ul}>
                <li className={`page-item first ${pager.currentPage === 1 ? 'disabled' : ''}`} style={styles.li}>
                    <a className="page-link" onClick={() => this.setPage(1)} style={styles.a}>{labels.first}</a>
                </li>
                <li className={`page-item previous ${pager.currentPage === 1 ? 'disabled' : ''}`} style={styles.li}>
                    <a className="page-link" onClick={() => this.setPage(pager.currentPage - 1)} style={styles.a}>{labels.previous}</a>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={`page-item page-number ${pager.currentPage === page ? 'active' : ''}`} style={styles.li}>
                        <a className="page-link" onClick={() => this.setPage(page)} style={styles.a}>{page}</a>
                    </li>
                )}
                <li className={`page-item next ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`} style={styles.li}>
                    <a className="page-link" onClick={() => this.setPage(pager.currentPage + 1)} style={styles.a}>{labels.next}</a>
                </li>
                <li className={`page-item last ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`} style={styles.li}>
                    <a className="page-link" onClick={() => this.setPage(pager.totalPages)} style={styles.a}>{labels.last}</a>
                </li>
            </ul>
        );
    }
}

JwPagination.propTypes = propTypes;
JwPagination.defaultProps = defaultProps;
export default JwPagination;