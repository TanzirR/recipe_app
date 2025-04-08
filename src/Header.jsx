import chef from "./assets/chef-claude-icon.png" 

export default function Header(){
    return (
        <header>
            <img src = {chef} alt = "image of the logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}