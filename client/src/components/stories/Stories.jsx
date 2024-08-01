import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext"

const Stories = () => {

const {currentUser} = useContext(AuthContext)

// Temporary
const stories = [
    {
        id: 1,
        name: "Pankhuri",
        img: "https://images.pexels.com/photos/19861151/pexels-photo-19861151/free-photo-of-a-mountain-stream-is-flowing-through-a-forest.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
        id: 2,
        name: "Pankhuri",
        img: "https://images.pexels.com/photos/19861151/pexels-photo-19861151/free-photo-of-a-mountain-stream-is-flowing-through-a-forest.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
        id: 3,
        name: "Pankhuri",
        img: "https://images.pexels.com/photos/19861151/pexels-photo-19861151/free-photo-of-a-mountain-stream-is-flowing-through-a-forest.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
        id: 4,
        name: "Pankhuri",
        img: "https://images.pexels.com/photos/19861151/pexels-photo-19861151/free-photo-of-a-mountain-stream-is-flowing-through-a-forest.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
];

    return(
        <div className="stories">
             <div className="story">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories