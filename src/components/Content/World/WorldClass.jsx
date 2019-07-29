import React from 'react'
import s from './World.module.css'
import User from './User';
import * as axios from 'axios'

class World extends React.Component {
    componentDidMount(): void {
        this.changePage()
    }

    changePage(page) {
        let worldReducer = this.props.worldReducer;

        // this.props.setCurrentPageAC(page || 1);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?pageSize=5&page=${page || 1}&count=${worldReducer.pageSize}`)
            .then((response) => {
                if (response.status === 200) {
                    let users = response.data.items;
                    let totalCount = response.data.totalCount;

                    this.props.setPagesInfoAC({users, totalCount, pageSize: 5, currentPage: page || 1});
                }
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.worldReducer.totalCount / this.props.worldReducer.pageSize);
        let pages = [...Array(pagesCount).keys()].map(i => i + 1);
        debugger
        return (
            <div className={s.worldWrapp}>
                <div className={s.title}>Users</div>
                <div className={s.pages}>
                    {pages.map((el) => {
                        return (
                            <span key={el}
                                  onClick={() => this.changePage(el)}
                                  className={this.props.worldReducer.currentPage === el ? s.pages_picked : undefined}> {el}
                            </span>
                        )
                    })}
                </div>
                <div className={s.users}>
                    {this.props.worldReducer.users.map(el =>
                        <User followUnfollowAC={() => this.props.followUnfollowAC(el.id)} user={el} key={el.id}/>)}
                </div>
                <div className={s.center}>
                    <button className={`${s.button} ${s.show_more}`} onClick={this.props.showMoreAC}>SHOW MORE</button>
                </div>
            </div>
        )
    }
}

export default World