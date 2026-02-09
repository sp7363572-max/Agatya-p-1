import { useState } from "react";
import "./blog.css";
import hero from "../../assets/cardimage/m.jpg";

function BlogPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">

      {/* ===== BLOG HEADER ===== */}

      <div className="blog-header">
        <h2>Agatya Our Success Story</h2>
      </div>
      <img src={hero} alt="MainBackground" />

      {/* ===== CONTENT ===== */}
      <div className="content">
        <div className="cards">
          <div className="card">
            <div className="img-box1"></div>
            <h3>Example Title 1</h3>
            <p>
              The carrot (Daucus carota subsp. sativus) is a root vegetable,
              typically orange in colour, though heirloom variants including
              purple, black, red, white, and yellow cultivars exist, all of
              which are domesticated forms of the wild carrot, Daucus carota,
              native to Europe and Southwestern Asia. The plant probably
              originated in Iran and was originally cultivated for its leaves
              and seeds. The carrot is a biennial plant in the umbellifer
              family, Apiaceae. World production of carrots (combined with
              turnips) for 2022 was 42 million tonnes, led by China producing
              44% of the total. The characteristic orange colour is from
              beta-carotene, making carrots a rich source of vitamin A. A myth
              that carrots help people to see in the dark was spread as
              propaganda in the Second World War, to account for the reason of
              British pilots' ability to fight in the dark; the real explanation
              was the introduction of radar.
            </p>
          </div>

          <div className="card">
            <div className="img-box2"></div>
            <h3>Example Title 2</h3>
            <p>
              A mango is an edible stone fruit produced by the tropical tree
              Mangifera indica. It originated in the northeastern part of the
              Indian subcontinent, in what is now Bangladesh, northeastern India
              and Myanmar.[1][2] M. indica has been cultivated in South and
              Southeast Asia since ancient times, resulting in two modern mango
              cultivar lineages: the "Indian" and the "Southeast Asian"
              types.[1][2] Other species in the genus Mangifera also produce
              edible fruits called "mangoes," most of which are found in the
              Malesian ecoregion.[3].
            </p>
          </div>

          <div className="card">
            <div className="img-box3"></div>
            <h3>Example Title 3</h3>
            <p>
              An apple is the round, edible fruit of an apple tree (Malus spp.).
              Fruit trees of the orchard or domestic apple (Malus domestica),
              the most widely grown in the genus, are cultivated worldwide. The
              tree originated in Central Asia, where its wild ancestor, Malus
              sieversii, is still found. Apples have been grown for thousands of
              years in Eurasia before they were introduced to North America by
              European colonists. Apples have cultural significance in many
              mythologies (including Norse and Greek) and religions (such as
              Christianity in Europe). Apples grown from seeds tend to be very
              different from those of their parents, and the resultant fruit
              frequently lacks desired characteristics. For commercial purposes,
              including botanical evaluation, apple cultivars are propagated by
              clonal grafting onto rootstocks. Apple trees grown without
              rootstocks tend to be larger and much slower to fruit after
              planting. Rootstocks are used to control the speed of growth and
              the size of the resulting tree, allowing for easier harvesting.
              There are more than 7,500 cultivars of apples. Different cultivars
              are bred for various tastes and uses, including cooking, eating
              raw, and cider or apple juice production. Trees and fruit are
              prone to fungal, bacterial, and pest problems, which can be
              controlled by a number of organic and non-organic means. In 2010,
              the fruit's genome was sequenced as part of research on disease
              control and selective breeding in apple production.
            </p>
          </div>
          <div className="card">
            <div className="img-box4"></div>
            <h3>Example Title 4</h3>
            <p>
              The pineapple[2] (Ananas comosus) is a tropical plant with an
              edible fruit; it is the most economically significant plant in the
              family Bromeliaceae.[3] The pineapple is indigenous to South
              America, where it has been cultivated for many centuries.[4] The
              introduction of the pineapple plant to Europe in the 17th century
              made it a significant cultural icon of luxury.[5] Since the 1820s,
              pineapple has been commercially grown in greenhouses and many
              tropical plantations. The fruit, particularly its juice, has
              diverse uses in cuisines and desserts. Pineapples grow as a small
              shrub; the individual flowers of the unpollinated plant fuse to
              form a multiple fruit. The plant normally propagates from the
              offset produced at the top of the fruit[2] or from a side shoot,
              and typically matures within a year.[6]
            </p>
          </div>
          <div className="card">
            <div className="img-box5"></div>
            <h3>Example Title 5</h3>
            <p>
              There are three distinct subspecies of lychee. The most common is
              the Indochinese lychee found in South China, Malaysia, and
              northern Vietnam. The other two are the Philippine lychee (locally
              called alupag or matamata) found only in the Philippines and the
              Javanese lychee cultivated in Indonesia and Malaysia.[4][5] The
              tree has been introduced throughout Southeast Asia and South
              Asia.[5] Cultivation in China is documented from the 11th
              century.[4] China is the main producer of lychees, followed by
              India, Vietnam, other countries in Southeast Asia, other countries
              in South Asia, Madagascar, and South Africa. A tall evergreen
              tree, it bears small fleshy sweet fruits. The outside of the fruit
              is a pink-red, rough-textured soft shell.
            </p>
          </div>
          <div className="card">
            <div className="img-box6"></div>
            <h3>Example Title 6</h3>
            <p>
              The orange originated in a region encompassing Southern China,
              Northeast India, and Myanmar; the earliest mention of the sweet
              orange was in Chinese literature in 314 BC. Orange trees are
              widely grown in tropical and subtropical areas for their sweet
              fruit. The fruit of the orange tree can be eaten fresh or
              processed for its juice or fragrant peel. In 2022, 76 million
              tonnes of oranges were grown worldwide, with Brazil producing 22%
              of the total, followed by India and China.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
