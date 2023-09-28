export const UserDisplay = ({userImage, userName, login, location, bio, repos, followers})=>{
    return (
        <>
            <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={userImage} alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4" id="name">{userName}</p>
                        <p className="subtitle is-6" id="userName">{login}</p>
                        <p className="subtitle is-7" id="userName">| Repos: {repos} | Followers: {followers} |</p>
                    </div>
                </div>
                <div className="content" id="location">
                    Location: {location}
                </div>
                <div className="content" id="about">
                    Bio: {bio}
                </div>
            </div>
        </div>
        </>
    )
};