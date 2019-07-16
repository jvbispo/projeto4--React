import React, { Component } from "react";
import Post from "./Post";
import Comments from "./Comments";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Diego Fernandes",
          avatar:
            "https://pbs.twimg.com/profile_images/1137917683268227078/E_TSX5IA_400x400.jpg"
        },
        date: "04 Jun 2019",
        content:
          "Pessoal, alguém aí procurando quer uma vaga de fullStack na rocket?",
        comments: [
          {
            id: 1,
            author: {
              name: "João Victor",
              avatar:
                "https://scontent.faju4-1.fna.fbcdn.net/v/t1.0-9/15181636_962957207143918_6131499995861816619_n.jpg?_nc_cat=111&_nc_oc=AQkpa3CT5b6kD5MfFfA07kQbCWmPiqDPxmUwG960nCBAIblODKknx4_vFSu8fHAh6rw&_nc_ht=scontent.faju4-1.fna&oh=ca7e1fd1a578e646fe24d03c4bb2c865&oe=5DB4B86B"
            },
            content:
              "Gostaria de saber pois estou aprendendo uma nova stack no goStack e estou gostando muito de trabalhar com todas essas tecnologias e gostaria muito de poder trabalhar com voces"
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Diego Fernandes",
          avatar:
            "https://pbs.twimg.com/profile_images/1137917683268227078/E_TSX5IA_400x400.jpg"
        },
        date: "02 Jun 2019",
        content:
          "Pessoal, Essa semana tem módulo novo de React e quero saber quem está animado para essa nova parte do GoStack",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://pbs.twimg.com/profile_images/1137917683268227078/E_TSX5IA_400x400.jpg"
            },
            content:
              "Logo logo temos uma surpresa para vocês que vai chegar por correio, e adiantando logo, no fundo tem uma maçã mordida haha"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div class="PostList">
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            img={post.author.avatar}
            name={post.author.name}
            date={post.date}
            content={post.content}
            comments={post.comments}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
