import React from "react";
import { useState } from "react";
import husky from "./Images/husky.jpeg";
import cat from "./Images/cat.jpeg";
import cat2 from "./Images/cat2.jpeg";
import dog from "./Images/dog.jpeg";
import cat3 from "./Images/cat3.jpeg";
import dog2 from "./Images/dog2.jpeg";
import tabby from "./Images/tabby.jpeg";
import pup from "./Images/pup.jpeg";
import dog3 from "./Images/dog3.jpeg";
import dog4 from "./Images/dog4.jpeg";
import cat4 from "./Images/cat4.jpeg";
import dog5 from "./Images/dog5.jpeg";

export default function Feed(feed) {
  /* INCREASE/DECREASE LIKE COUNT BY 1 WITH A CLICK, LIKE COUNT IS 10 */
  const [like, setLike] = useState(10);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="feed">
      {/* HEADER */}
      <header id="header1">
        <div>
          <h3 id="h3">Inspogram</h3>
        </div>
        <div className="icons">
          <div id="addBox">
            <i className="material-icons">add_box</i>
          </div>
          <div id="profilename">ashley_fillmore</div>
          <div>
            <img id="profilePic" src={husky} alt="husky"></img>
          </div>
          <a href="/">
            <div id="logout">Log out</div>
          </a>
        </div>
      </header>
      {/* MAIN SECTION */}
      <main>
        {/* STORIES AND PROFILE PICTURES */}
        <div className="stories">
          <div className="pic">
            <img className="picsize" src={husky} alt="husky"></img>
          </div>
          <div className="pic">
            <img className="picsize" src={cat} alt="cat"></img>
          </div>
          <div className="pic">
            <img className="picsize" src={dog3} alt="dog3"></img>
          </div>
          <div className="pic">
            <img className="picsize" src={cat2} alt="cat2"></img>
          </div>
          <div className="pic">
            <img className="picsize" src={dog} alt="dog"></img>
          </div>
          <div className="pic">
            <img className="picsize" src={cat3} alt="cat3"></img>
          </div>
          <div className="pic">
            <img className="picsize" src={dog4} alt="dog4"></img>
          </div>
          <div className="pic">
            <img className="picsize" src={tabby} alt="tabby"></img>
          </div>
          <div className="pic">
            <img className="picsize" src={dog5} alt="dog5"></img>
          </div>
          <div className="pic">
            <img className="picsize" src={cat4} alt="cat4"></img>
          </div>
        </div>
        {/* POSTS SECTION */}
        <div className="wholePost">
          <div className="postInfo">
            <img id="profilePic" src={husky} alt="husky"></img>
            <p>Blue_Eyes</p>
          </div>
          <div>
            <img id="dog2" src={dog2} alt="dog2"></img>
          </div>
          <div className="entirePost">
            <div className="icons2">
              <div>
                {/* CLICK ON HEART AND LIKE COUNT WILL INCREASE, CLICK AGAIN AND COUNT WILL DECREASE */}
                <span
                  id="purpleheart"
                  className="ec ec-purple-heart"
                  onClick={likeHandler}
                ></span>
              </div>
              <span className="postLikeCounter">{like} people like this</span>
            </div>
            <div className="likedBy">
              <img id="profilePic2" src={cat2} alt="cat2"></img>
              <p>
                Liked by <strong>Lil_Grey </strong>and <strong>others</strong>
              </p>
            </div>
            <div id="description">
              <strong>Blue_Eyes </strong>My pal Frenchie had his first modeling
              gig <br />
              today...looks like he got bored pretty quickly! He knows he's
              cute.
            </div>
            <div id="comments">View all 160 comments</div>
            <div className="comment1">
              <div>Tabby_Cat</div>
              <span id="heartEyes" className="ec ec-heart-eyes"></span>
            </div>
            <div className="comment2">
              <div>
                <strong>Beach_Lover </strong>What a handsome model!
              </div>
              <span id="doghead" className="ec ec-dog"></span>
            </div>
            <div id="days">2 DAYS AGO</div>
            <div className="addComment">
              <i className="material-icons">sentiment_satisfied_alt</i>
              <div id="add">Add a comment...</div>
              <div id="post">Post</div>
            </div>
          </div>
        </div>
        <div className="wholePost">
          <div className="postInfo">
            <img id="profilePic" src={cat3} alt="cat3"></img>
            <p>Tabby_Cat</p>
          </div>
          <div>
            <img id="tabby" src={tabby} alt="tabby"></img>
          </div>
          <div className="entirePost">
            <div className="icons2">
              <div>
                <span
                  id="purpleheart"
                  className="ec ec-purple-heart"
                  onClick={likeHandler}
                ></span>
              </div>
              <span className="postLikeCounter">{like} people like this</span>
            </div>
            <div className="likedBy">
              <img id="profilePic2" src={husky} alt="husky"></img>
              <p>
                Liked by <strong>Blue_Eyes </strong>and <strong>others</strong>
              </p>
            </div>
            <div id="description">
              <strong>Tabby_Cat </strong>Feeling pretty today, how about a
              selfie?
            </div>
            <div id="comments">View all 118 comments</div>
            <div className="comment1">
              <div>King_Charles</div>
              <span id="heartEyes" className="ec ec-kissing-cat"></span>
            </div>
            <div className="comment2">
              <div>
                <strong>Persian_Kitty </strong>Looking good, Tabby!
              </div>
            </div>
            <div id="days">5 DAYS AGO</div>
            <div className="addComment">
              <i className="material-icons">sentiment_satisfied_alt</i>
              <div id="add">Add a comment...</div>
              <div id="post">Post</div>
            </div>
          </div>
        </div>
        <div className="wholePost">
          <div className="postInfo">
            <img id="profilePic" src={dog} alt="dog"></img>
            <p>King_Charles</p>
          </div>
          <div>
            <img id="pup" src={pup} alt="pup"></img>
          </div>
          <div className="entirePost">
            <div className="icons2">
              <div>
                <span
                  id="purpleheart"
                  className="ec ec-purple-heart"
                  onClick={likeHandler}
                ></span>
              </div>
              <span className="postLikeCounter">{like} people like this</span>
            </div>
            <div className="likedBy">
              <img id="profilePic2" src={cat} alt="cat"></img>
              <p>
                Liked by <strong>Tabby_Cat </strong>and <strong>others</strong>
              </p>
            </div>
            <div id="description">
              <strong>King_Charles </strong>Mom and Dad brought me home a little
              brother! Meet Enzo!
            </div>
            <div id="comments">View all 95 comments</div>
            <div className="comment1">
              <div>Blue_Eyes</div>
              <span id="heartEyes" className="ec ec-heart-eyes"></span>
            </div>
            <div className="comment2">
              <div>
                <strong>Beach_Lover </strong>I can't wait to meet him!!
              </div>
              <span id="doghead" className="ec ec-dog"></span>
            </div>
            <div id="days">3 DAYS AGO</div>
            <div className="addComment">
              <i className="material-icons">sentiment_satisfied_alt</i>
              <div id="add">Add a comment...</div>
              <div id="post">Post</div>
            </div>
          </div>
        </div>
        <div className="wholePost">
          <div className="postInfo">
            <img id="profilePic" src={dog4} alt="dog4"></img>
            <p>Beagle_Boy</p>
          </div>
          <div>
            <img id="pup" src={dog4} alt="dog4"></img>
          </div>
          <div className="entirePost">
            <div className="icons2">
              <div>
                <span
                  id="purpleheart"
                  className="ec ec-purple-heart"
                  onClick={likeHandler}
                ></span>
              </div>
              <span className="postLikeCounter">{like} people like this</span>
            </div>
            <div className="likedBy">
              <img id="profilePic2" src={cat4} alt="cat4"></img>
              <p>
                Liked by <strong>Snowflake </strong>and <strong>others</strong>
              </p>
            </div>
            <div id="description">
              <strong>Beagle_Boy </strong>Had a grooming appointment earlier -
              feeling dapper and happy!
            </div>
            <div id="comments">View all 139 comments</div>
            <div className="comment1">
              <div>Georgie_the_Corgi</div>
              <span id="eyes" className="ec ec-eyes"></span>
            </div>
            <div className="comment2">
              <div>
                <strong>Jack_Russel </strong>Looking good my friend!!
              </div>
              <span id="doghead" className="ec ec-paw-prints"></span>
            </div>
            <div id="days">3 DAYS AGO</div>
            <div className="addComment">
              <i className="material-icons">sentiment_satisfied_alt</i>
              <div id="add">Add a comment...</div>
              <div id="post">Post</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
