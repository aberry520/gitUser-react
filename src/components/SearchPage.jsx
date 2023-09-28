import { useState } from "react";
import { UserDisplay } from "./UserDisplay";
import { UsernameForm } from "./UsernameForm";
import styled from "styled-components";

const CardDiv = styled.div `
    /* border: solid 2px pink; */
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    height: 100vh;
    margin: 0;
`;
const NavBar = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
`;
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
            setLogin(data.message);
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
        <CardDiv>
        <NavBar>
        <UsernameForm search={search} handleChange={handleChange} usernameInput={usernameInput} />
        </NavBar> 
            <UserDisplay userImage={userImage} userName={userName} login={login} location={location} bio={bio} repos={repos} followers={followers} />
        </CardDiv>
        </>
    )
};