import { Icon } from "../../components/Icon/Icon";

export function Contacts(){
    return(
        <section>
            <h2>For any questions please mail me:</h2>
            <span>hi@pavanmg.in</span>
            <footer>
                <div>
                    <img src="" alt="" />
                    <div>
                        <span>+91 12345 09876</span>
                        <span>info@example.com</span>
                        <div>
                            <Icon iconId={"githubSocialIcon"} fill ={"#42446E"}/>
                            <Icon iconId={"twitterSocialIcon"} fill ={"#0e159d"}/>
                            <Icon iconId={"linkedInSocialIcon"} fill ={"#42446E"}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Designed and built by Pavan MG with Love & Coffee</p>
                    </div>
                </div>
            </footer>
        </section>
       
    )
}
