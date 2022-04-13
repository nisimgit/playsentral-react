import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Header } from './Header';
import {GAMES_URL} from './request_utils';
import InfiniteScroll from 'react-infinite-scroller';

export class PostComments extends React.Component {
    render() {
        return (
                <p>Comments here</p>
        )

    }
}




//     constructor(props) {
//         super(props)
//         this.state = {
//             comments: [],
//             hasNext: true,
//         }
//         this.source = axios.CancelToken.source()
//         this.nextUrl = GAMES_URL
//     }
//
//     getGames() {
//         console.log('getting games')
//         axios
//         .get(this.nextUrl, {
//             cancelToken: this.source.token
//           })
//         .then(response => {
//             console.log(response)
//             if (response.status === 200) {
//                 this.setState(
//                     {games: [...this.state.games, ...response.data],
//                             hasNext: response.data.next != null})
//                 this.nextUrl = response.data.next
//             }})
//         .catch(error =>
//             {console.log(error)})
//         }
//
//     componentWillUnmount() {
//         this.source.cancel("Request cancelled")
//     }
//
//     render() {
//         let gameData = this.state.games.map(
//             (game) => {
//                 return <GameCard game={game}/>
//             }
//             )
//
//         return(
//             <>
//                 <Header />
//                 <div style={{display: 'flex', flexDirection: 'column'}}>
//                 <InfiniteScroll
//                 pageStart={1}
//                 loadMore={() => this.getGames()}
//                 hasMore={this.state.hasNext}
//                 loader={<h1 className="loader" key={0}>Loading ...</h1>}>
//                 {gameData}
//                 </InfiniteScroll>
//                 </div>
//             </>
//         )
//     }
// }