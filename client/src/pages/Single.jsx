import React from "react";
import Logo from "../img/logo.jpeg";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content logo">
        <img src={Logo} alt="" />
        <div className="user">
          <img src={Logo} alt="" />
          <div className="info">
            <span>Zack</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Logo} alt="" />
            </Link>
            <img src={Logo} alt="" />
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
          tempora.
        </h1>
        <br />
        <p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            rerum, explicabo vero voluptatem libero qui. Vero ipsum harum omnis
            provident? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dolorem fugiat recusandae rerum sit earum distinctio deserunt
            voluptatum magnam libero ex.
          </p>

          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            cupiditate temporibus eius molestiae ad iusto iure, consectetur sint
            harum excepturi odit Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quae distinctio sapiente accusantium sint quaerat
            exercitationem ex vel et optio, esse dolorem error. Veritatis, quia!
            Id nam, ut sint distinctio quae quam, doloribus iure neque harum
            itaque voluptatem. Exercitationem sequi illum consequuntur, hic odit
            perspiciatis eum ea, molestiae pariatur sint nostrum accusantium,
            dolores magnam officiis nihil eaque animi voluptate dicta inventore
            ipsa? Quos quae tempore cum? Fugit ea officiis suscipit consectetur
            nostrum iure ab praesentium odio, dignissimos doloribus saepe, cum
            distinctio, provident libero! Ipsa eos eius aliquid. Ullam officiis
            ratione, quas sed similique eaque distinctio, voluptates odio, iure
            possimus nulla iste!
          </p>

          <br />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            labore, quas quasi natus ad saepe at praesentium laborum vitae,
            eaque, ipsum aperiam porro iure. Quo dolorem perferendis officiis
            optio omnis rem vero nihil, deserunt ex eligendi asperiores ad a
            doloribus error, necessitatibus recusandae tenetur fuga delectus
            vel? Quibusdam reiciendis officiis, reprehenderit deleniti sint,
            incidunt aperiam consequatur delectus veritatis iure non animi quos,
            sit laborum aliquid? Ut consectetur adipisci quas blanditiis,
            eveniet maiores quos maxime magni aliquid, laboriosam exercitationem
            beatae ipsa. Voluptas voluptate illum unde possimus delectus,
            laudantium sint, perspiciatis minima enim officia earum nemo iusto
            repellat, cum recusandae? Laborum voluptates unde dicta ad tempore,
            nihil repellat numquam et sequi fuga optio, omnis molestias veniam
            dolore expedita. Libero, corporis temporibus saepe rem voluptate
            laboriosam sint ab numquam impedit quaerat accusantium beatae
            aliquam, quam reiciendis! Aut dolore, in inventore error mollitia
            repudiandae et quos id earum recusandae optio, maxime labore
            assumenda illum vel ipsa, soluta possimus. Recusandae maiores saepe,
            itaque modi possimus, labore explicabo ipsam quia sunt quo illo
            dolorum doloremque harum odit quidem magnam. Repellendus, excepturi
            fugit quia quibusdam tenetur, harum quas nisi, asperiores similique
            accusamus deserunt dolorem explicabo modi. Nam veniam consequatur
            omnis ea ad odio vero nulla, debitis neque?
          </p>
        </p>
      </div>

      <Menu />
    </div>
  );
}

export default Single;
