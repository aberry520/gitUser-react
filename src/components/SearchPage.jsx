import { useState } from "react";
import { UserDisplay } from "./UserDisplay";
import { UsernameForm } from "./UsernameForm";

export const SearchPage = () => {
    const [userImage, setUserImage] = useState("https://bulma.io/images/placeholders/96x96.png");
    const [usernameInput, setUsernameInput] = useState();
    const [userName, setUserName] = useState("Name");
    const [login, setLogin] = useState("Username");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");
    const [repos, setRepos] = useState("0");
    const [followers, setFollowers] = useState("0");

    const getUserData = async () => {
        const apiUrl = `https://api.github.com/users/${usernameInput}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        if (!data.message) {
            setUserImage(data.avatar_url);
            setUserName(data.name);
            setLogin(data.login);
            setLocation(data.location);
            setBio(data.bio);
            setRepos(data.public_repos);
            setFollowers(data.followers);
        }
        if (data.message) {
            setUserName("User Not Found");
            setUserImage("https://bulma.io/images/placeholders/96x96.png");
            setLogin("Not Found");
            setLocation("Not Found");
            setBio("Not Found");
            setRepos("0");
            setFollowers("0");

        }


        return data;
    };

    const search = () => {
        getUserData();
        setUsernameInput("");
    };
    const handleChange = (e) => {
        setUsernameInput(e.target.value);

    };
    return (
        <>
            <UsernameForm search={search} handleChange={handleChange} usernameInput={usernameInput} />
            <UserDisplay userImage={userImage} userName={userName} login={login} location={location} bio={bio} repos={repos} followers={followers} />
        </>
    )
};