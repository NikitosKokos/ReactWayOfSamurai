import React from 'react';
import { requestNews, setCurrentPage,requestCountry } from '../../redux/news-reducer';
import News from './News';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getIsFetching,getPage,getTotalResults,getPageSize,getNews,getCountry,getCountries, } from '../../redux/news-selectors';
import { withRouter } from 'react-router-dom';
class NewsContainer extends React.Component {
    componentDidMount() {
        let page = this.props.match.params.page;
        if(page === undefined){
            page = this.props.page;
        }
        this.props.requestNews(this.props.country,Number(page),this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.requestNews(this.props.country,p,this.props.pageSize);
    }
    onCountryChanged = (c) => {
        this.props.requestCountry(c,this.props.page,this.props.pageSize);
    }

    render = () => (
        <>
            <News 
                news={this.props.news}
                pageSize={this.props.pageSize}
                totalResults={this.props.totalResults}
                page={this.props.page}
                country={this.props.country}
                isFetching={this.props.isFetching}
                countries={this.props.countries}
                onPageChanged={this.onPageChanged}
                onCountryChanged={this.onCountryChanged}
            />
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        news: getNews(state),
        pageSize: getPageSize(state),
        totalResults: getTotalResults(state),
        page: getPage(state),
        isFetching: getIsFetching(state),
        country: getCountry(state),
        countries:  getCountries(state),
    }
}


export default compose(connect(mapStateToProps,{
        setCurrentPage,
        requestNews,
        requestCountry
    }),
    withRouter,
    )(NewsContainer);