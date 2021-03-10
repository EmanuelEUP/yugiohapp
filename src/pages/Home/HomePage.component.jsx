import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";

import Image from "./../../components/Common/Image/Image.component";

import _srcYamiYugi from "./../../assets/images/YamiYugi.png";
import _srcYamiYugi02 from "./../../assets/images/YamiYugi02.png";
import _srcseto from "./../../assets/images/seto.png";
import _srcseto02 from "./../../assets/images/seto02.png";
import _srcjoey from "./../../assets/images/joey.png";
import _srcjoey02 from "./../../assets/images/joey02.png";
import _srcyusei from "./../../assets/images/yusei.png";
import _srcyusei02 from "./../../assets/images/yusei02.png";
import _srcjaden from "./../../assets/images/jaden.png";
import _srcjaden02 from "./../../assets/images/jaden02.png"; 
import _srchistory from "./../../assets/images/history.png";
import _srcrexraptor from "./../../assets/images/rexraptor.png";
import _srcdarkmage from "./../../assets/images/darkmage.png";

import "./HomePage.styles.scss";

const HomePage = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Carousel fade={true} className="carousel-fade">
              <Carousel.Item interval={3000}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <Image
                        src={_srcYamiYugi}
                        classnames="hvr-grow-rotate d-none d-md-block"
                        width="90%"
                        height="550px"
                        alt="_yamiyugi"
                      />

                      <Image
                        src={_srcYamiYugi02}
                        classnames="hvr-grow-rotate d-block d-md-none"
                        width="90%"
                        height="550px"
                        alt="alt"
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <Carousel.Caption>
                        <h3 className="font03"> ATEM (YAMI YUGI) </h3>

                        <p
                          className="text-justify shadow-sm font01 text-warning "
                          style={{ fontSize: "small" }}
                        >
                          Atem defeated Zorc Necrophades using a spell that
                          included his name, and then sealed Zorc in the Ring
                          Millennial. Then he sealed himself in the Puzzle of
                          the Millennium, erasing his mind to protect the spell
                          and avoid for Zorc to be resurrected again. The Puzzle
                          of Millennium shattered and was buried within the tomb
                          of Atem. This is a character who has many doubts about
                          his passed from him and tries to find them to know his
                          fate.
                        </p>

                        <h3 className="font03"> YUGI MUTO </h3>

                        <p
                          className="text-justify shadow-sm font01 text-warning"
                          style={{ fontSize: "small" }}
                        >
                          Yugi Muto is a calm and weak person who studies in
                          freshman year of high school, but when he's Dueling
                          his his body is possessed by the spirit of the
                          Millennium Puzzle, being the future version of the
                          pharaoh. When he arms the Millennium puzzle, the
                          spirit inside of this is released, allowing Yugi to
                          constantly change from mind and personality with the
                          help of the puzzle. His his best friend is Jounouchi.
                          In both the manga and the original version of the
                          anime is implied that Yugi is in love with his friend
                          Anzu. Yugi's worst enemies are Pegasus, Marik Ishtar,
                          Bakura, Kaiba, Dartz, Noah and Zigfried (the latter in
                          the anime filler). In Yu-Gi-Oh! GX is recognized as
                          "the best Card Duelist in the world" and he fights
                          Jaden Yuki at the end of the Yu-Gi-Oh! anime. GX.
                        </p>
                      </Carousel.Caption>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <Image
                        src={_srcseto}
                        classnames="hvr-grow-rotate d-none d-md-block"
                        width="90%"
                        height="550px"
                        alt="_setokaiba"
                      />

                      <Image
                        src={_srcseto02}
                        classnames="hvr-grow-rotate d-block d-md-none"
                        width="90%"
                        height="550px"
                        alt="_setokaiba02"
                      />
                    </div>

                    <div className="col-12 col-md-6 align-top">
                      <Carousel.Caption className="align-top">
                        <h3 className="font03 align-top"> SETO KAIBA </h3>

                        <p
                          className="text-justify shadow-sm font01 text-warning align-top"
                          style={{ fontSize: "small" }}
                        >
                          (16 years old at the beginning) He had the title of
                          Best Duelist in the World until Yami Yugi beat him.
                          Since then, Kaiba has been a mystery to everyone, as
                          she possesses a cold and distant character. His
                          favorite cards are Dragons, especially the well-known
                          "Blue-Eyes White Dragon". He runs the Kaiba Corp. His
                          inventions are always very good ideas that are usually
                          related to Monster Duel like the "Duel Disk" and the
                          new "Monster Duel" rules. He believes neither in fate
                          nor in magic, although in the end he will have to
                          believe in both. He is a great computer scientist. His
                          greatest desire is to once again have the title of
                          Best Duelist in the World, but for this he has to
                          defeat the holder of that title: Yugi. Kaiba was the
                          possessor of the Egyptian God "Obelisk, the
                          Tormentor", but Yugi won it in a Monster Duel (in good
                          law). He has suffered a lot since the death of his
                          parents, much more when Gozaburo adopted him. He
                          always takes care of his brother Mokuba and makes sure
                          nothing bad happens to him. Seto is tremendously
                          arrogant, vain and overconfident when Yugi still beats
                          him, but then he becomes passive and calm and realizes
                          that Yugi is the true King of the Games. However, he
                          never tires of facing it again.
                        </p>
                      </Carousel.Caption>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <Image
                        src={_srcjoey}
                        classnames="hvr-grow-rotate d-none d-md-block"
                        width="90%"
                        height="550px"
                        alt="_joey"
                      />

                      <Image
                        src={_srcjoey02}
                        classnames="hvr-grow-rotate d-block d-md-none"
                        width="90%"
                        height="550px"
                        alt="_joey"
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <Carousel.Caption className="overflow-auto">
                        <h3 className="font03">
                          {" "}
                          KATSUYA JONOUCHI (JOEY WHEELER)
                        </h3>

                        <p
                          className="text-justify shadow-sm font01 text-warning"
                          style={{ fontSize: "small" }}
                        >
                          Hyperactive by nature, he is Yugi's best friend and
                          although at first he did not show great skill with
                          cards, during the course of his adventure with Yugi he
                          will learn the secrets to becoming a great Duelist.
                          His concern is her only sister, Shizuka Kawai
                          (Serenity Wheeler) who was separated from Jonouchi due
                          to her parents' divorce, while Shizuka was taken to
                          live with her mother. He can tell how he feels great
                          affection for Mai. His favorite card is "Flame
                          Swordsman" and his Deck of Cards is made up mostly of
                          Warrior-Type monsters. Although it is worth mentioning
                          that then he obtains "Red-Eyes Black Dragon", a card
                          that becomes more precious than "Swordsman of the
                          Flame", which is supported in episode 76 (Friends to
                          the End) in which that card symbolizes her union with
                          Yugi. He loses it after being attacked by the Rare
                          Hunters and he is supposed to get it back after Battle
                          City in a dialogue in which he tells Yugi that he is
                          going to get something back and he says that he still
                          has something that belongs to him. Although the duel
                          is not seen, it can be seen that Jonouchi later
                          recovers the dragon, which is why it is believed that
                          he was able to defeat Yugi. He came in second place in
                          the Pegasus tournament and fourth in Battle City. In
                          Yu-Gi-Oh! GX, he is mentioned in a Pegasus and Edo
                          Phoenix conversation as the third best Duelist in the
                          world, unable to surpass either Kaiba or Yugi as a
                          Duelist.
                        </p>
                      </Carousel.Caption>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <Image
                        src={_srcyusei}
                        classnames="hvr-grow-rotate d-none d-md-block"
                        width="90%"
                        height="550px"
                        alt="_yusei"
                      />

                      <Image
                        src={_srcyusei02}
                        classnames="hvr-grow-rotate d-block d-md-none"
                        width="90%"
                        height="550px"
                        alt="_yusei"
                      />
                    </div>

                    <div className="col-12 col-md-6 vertical-center">
                      <Carousel.Caption className="overflow-auto">
                        <h3 className="font03"> YUSEI FUDO</h3>

                        <p
                          className="text-justify shadow-sm font01 text-warning"
                          style={{ fontSize: "small" }}
                        >
                          Yusei Fudo (不動遊星, Fudō Yūsei) es el protagonista
                          principal de Yu-Gi-Oh! 5D's y uno de los Salvadores.
                          También es el actual Rey de los Juegos. Es conocido
                          por muchos y respetado por otros personajes de la
                          serie por su ingenioso estilo de Duelo. Su
                          considerable habilidad como Duelista, y su
                          personalidad tranquila e inteligente lo hacen uno de
                          los mejores. Usa un Duel Runner llamado Yusei Go. En
                          la versión de 4Kids Entertainment en inglés, "Let's
                          rev it up!" (¡Vamos hacia arriba!), es su frase
                          personal que suele decir normalmente. Algo curioso es
                          que siempre cuando Invoca por Sincronía a sus
                          monstruos en la versión original japonesa dice el
                          siguiente verso: ¡La agrupación de estrellas
                          despertarán un nuevo poder... haciendo el camino más
                          brillante!.
                        </p>
                      </Carousel.Caption>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-md-6">

                    <Image
                        src={_srcjaden}
                        classnames="hvr-grow-rotate d-none d-md-block"
                        width="90%"
                        height="550px"
                        alt="_jaden"
                      />

                      <Image
                        src={_srcjaden02}
                        classnames="hvr-grow-rotate d-block d-md-none"
                        width="90%"
                        height="550px"
                        alt="_jaden02"
                      />
 
                    </div>

                    <div className="col-12 col-md-6">
                      <Carousel.Caption className="overflow-auto">
                        <h3 className="font03"> JADEN YUKI </h3>

                        <p
                          className="text-justify shadow-sm font01 text-warning"
                          style={{ fontSize: "small" }}
                        >
                          Jaden Yuki, known as Judai Yūki (遊 城 十 代, Yūki
                          Jūdai) in the original Japanese version of the anime,
                          is a quite stubborn and talented Duelist, as well as a
                          fun-loving and talented Duelist who loves Dueling as
                          much as his friends. He is the protagonist of the
                          Yu-Gi-Oh! GX. Jaden is the direct descendant of the
                          Supreme King. At the end of the third season, he fused
                          his soul with Yubel, his favorite card since
                          childhood, using the "Super Polymerization" card to
                          purify her from the influence of The Light of
                          Destruction. He attended the Dueling Academy and was
                          in the Slifer Rojo dorm, the lowest ranking dorm, due
                          to his poor results on the entrance exam. As time
                          passes, he becomes the best Duelist in the Academy and
                          saves the world and the Academy from many threats such
                          as the evil Kagemaru, the Light of Destruction that
                          controlled Sartorius, the manipulative Yubel and
                          finally the spirit of the darkness Night Veil. After
                          three years, he graduates from the Dueling Academy and
                          begins his own journey to improve as a Duelist.
                        </p>
                      </Carousel.Caption>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 col-sm-6">
            <h1 className="font03 text-white">HISTORY</h1>

            <p className="font01 text-justify text-white">
              Yu-Gi-Oh! (Japanese: 遊☆戯☆王, Hepburn: Yū-Gi-Ō!, lit. "King of
              Games") is a Japanese manga series about gaming written and
              illustrated by Kazuki Takahashi. It was serialized in Shueisha's
              Weekly Shōnen Jump magazine between September 1996 and March 2004.
              The plot follows the story of a boy named Yugi Mutou, who solves
              the ancient Millennium Puzzle. Yugi awakens a gambling alter-ego
              or spirit within his body that solves his conflicts using various
              games.
            </p>

            <p className="font01 text-justify text-white">
              Two anime adaptations were produced; one by Toei Animation, which
              aired from April to October 1998, and another produced by NAS and
              animated by Studio Gallop titled Yu-Gi-Oh! Duel Monsters, which
              aired between April 2000 and September 2004. The manga series has
              spawned a media franchise that includes multiple spin-off manga
              and anime series, a trading card game, and numerous video games.
              Most of the incarnations of the franchise involve the fictional
              trading card game known as Duel Monsters, where each player uses
              cards to "duel" each other in a mock battle of fantasy "monsters".
              This forms the basis for the real life Yu-Gi-Oh! Trading Card
              Game. Yu-Gi-Oh has become one of the highest-grossing media
              franchises of all time.
            </p>
          </div>

          <div className="col-12 col-sm-6">
            <Image
              src={_srchistory}
              classnames="hvr-shrink  d-md-block"
              width="90%"
              height="550px"
              alt="_history"
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 col-sm-6">
            <Image
              src={_srcdarkmage}
              classnames="hvr-float-shadow  d-md-block"
              width="90%"
              height="100%"
              alt="darkimage"
            />
          </div>

          <div className="col-12 col-sm-6">
            <h1 className="font03 text-white">DEVELOPMENT</h1>

            <p className="font01 text-justify text-white">
              In the initial planning stages of the manga, Takahashi had wanted
              to draw a horror manga.[3] Although the end result was a manga
              about games, it was clear that some horror elements influenced
              certain aspects of the story. Takahashi decided to use "battle" as
              his primary theme. Since there had been so much "fighting" manga,
              he found it difficult to come up with something original. He
              decided to create a fighting manga where the main character
              doesn't hit anybody, but also struggled with that limitation. When
              the word "game" came to mind, he found it much easier to work with
            </p>

            <p className="font01 text-justify text-white">
              When an interviewer asked Takahashi if he tried to introduce
              younger readers to real life gaming culture referenced in the
              series, Takahashi responded by saying that he simply included
              "stuff he played and enjoyed", and that it may have introduced
              readers to role-playing games and other games. Takahashi added
              that he created some of the games seen in the series. The author
              stressed the importance of "communication between people," often
              present in tabletop role-playing games and not present in solitary
              video games. Takahashi added that he feels that quality
              communication is not possible over the Internet.
            </p>

            <p className="font01 text-justify text-white">
              Takahashi had always been interested in games, claiming to have
              been obsessed as a child and is still interested in them as an
              adult. In a game, he considered the player to become a hero. He
              decided to base the Yu-Gi-Oh! series around such games and used
              this idea as the premise; Yugi was a weak childish boy, who became
              a hero when he played games. With friendship being one of the
              major themes of Yu-Gi-Oh!, he based the names of the two major
              characters "Yūgi" and "Jōnouchi" on the word yūjō (友情), which
              means "friendship". Henshin, the ability to turn into something or
              someone else, is something Takahashi believed all children dreamed
              of. He considered Yugi's "henshin" Dark Yugi, a savvy, invincible
              games player, to be a big appeal to children.
            </p>

            <p className="font01 text-justify text-white">
              Takahashi said that the card game held the strongest influence in
              the manga, because it "happened to evoke the most response" from
              readers. Prior to that point, Takahashi did not plan for the card
              game to make more than two appearances.
            </p>

            <p className="font01 text-justify text-white">
              Takahashi said that the "positive message" for readers of the
              series is that each person has a "strong hidden part" (like "human
              potential") within himself or herself, and when one finds
              hardship, the "hidden part" can emerge if one believes in
              him/herself and in his/her friends. Takahashi added that this is
              "a pretty consistent theme."
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 col-sm-6">
            <h1 className="font03 text-white">PUBLICATIÓN </h1>

            <p className="font01 text-justify text-white">
              The original Yu-Gi-Oh! manga by Kazuki Takahashi was serialized in
              Shueisha's Weekly Shōnen Jump from September 30, 1996 to March 8,
              2004. Unlike most other media, it features a variety of different
              games. The plot starts out fairly episodic and the first seven
              volumes includes only three instances of Magic & Wizards. In the
              sixtieth chapter, the Duelist Kingdom arc starts and instances of
              Magic & Wizards becomes fairly common, and after the DDD arc, it
              reappears again and becomes part of an important plot point during
              the Battle City arc. The last arc of the manga focuses on a
              tabletop role-playing game that replicates the Pharaoh's lost
              memories, in which the battle system is based on an ancient Shadow
              Game played in his kingdom (stated in-series to be the precursor
              of Magic & Wizards and the indirect precursor to card games in
              general). The editors were Yoshihisa Heishi and Hisao Shimada.
              Kazuki Takahashi credits Toshimasa Takahashi in the "Special
              Thanks" column.
            </p>

            <p className="font01 text-justify text-white">
              The English version of the Yu-Gi-Oh! manga was released in the
              North America by Viz Media, running in Shonen Jump magazine
              between 2002 and December 2007. The original Japanese character
              names are kept for most of the characters (Yugi, Jonouchi, Anzu,
              and Honda, for instance), while the English names are used for a
              minor number of characters (e.g. Maximillion Pegasus) and for the
              Duel Monsters cards. The manga is published in its original
              right-to-left format and is largely unedited, although instances
              of censorship appear such as editing out the finger in later
              volumes. Viz released the first volume of the Yu-Gi-Oh! manga up
              to the end of the Monster World arc under its original title.
              Starting from the last chapter of the seventh Japanese volume, the
              Duelist Kingdom, Dungeon Dice Monsters, and Battle City arcs are
              released under the title Yu-Gi-Oh!: Duelist, while the Memory
              World arc was released as Yu-Gi-Oh! Millennium World.
            </p>
          </div>

          <div className="col-12 col-sm-6">
            <Image
              src={_srcrexraptor}
              classnames="hvr-shrink  d-md-block"
              width="80%"
              height="100%"
              alt="_rexraptor"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
