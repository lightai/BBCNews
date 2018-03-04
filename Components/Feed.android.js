import React from 'react';
import {
    StyleSheet,
    View,
    ListView,
    TimerMixin,
    RefreshControl
} from 'react-native';

// import Loader from 'react-native-angular-activity-indicator';
import Story from './Story';

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            isAnimating: true,
            isRefreshing: false,
        };
        // console.log(props);
        console.log(this.props);
    }

    componentDidMount() {
        this.fetchData()
    }

    filterNews(news = []) {
        return new Promise((res, rej) => {
            const filtered = news.filter(item => {
                return item.content.format === 'bbc.mobile.news.format.textual'
            });
            res(filtered);
        })
    }

    fetchData() {
        this.setState({isRefreshing: true});
        fetch(`http://trevor-producer-cdn.api.bbci.co.uk/content${this.props.collection || '/cps/news/world'}`)
            .then((response) => response.json())
            .then((responseData) => this.filterNews(responseData.relations))
            .then((newsItems) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(newsItems),
                    loaded: true,
                    isRefreshing: false,
                    isAnimating: false
                })
            }).done();
    }

    renderLoading() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1}}>
                {/*<Loader isAnimating={this.state.isAnimating} lineWidth={10} color={'#ff00ff'} style={styles.loadingView}/>*/}
            </View>
        );
    }

    renderStories(story) {
        return (
            <Story story={story} navigator={this.props.navigator}/>
        );
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoading();
        }

        return (
            <ListView
                testID={"Feed Screen"}
                dataSource={this.state.dataSource}
                renderRow={this.renderStories.bind(this)}
                style={styles.listView}
                contentInset={{top: 0, left: 0, bottom: 64, right: 0}}
                scrollEventThrottle={200}
                {...this.props}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this.fetchData}
                        tintColor="#bb1919"
                        title="Loading..."
                        progressBackgroundColor="#ffff00"
                    />
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    loadingView: {
        marginTop: 30,
        marginRight: 50,
        backgroundColor: '#ff00ff',
    },

    listView: {
        backgroundColor: '#eee'
    },
});

module.exports = Feed;