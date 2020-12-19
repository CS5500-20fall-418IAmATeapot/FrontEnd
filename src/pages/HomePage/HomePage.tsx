import React, { FunctionComponent } from "react";
import style from "./style.module.css";
import { Carousel } from "react-bootstrap";
import { categories } from "./catagories";
import { restaurants } from "./restaurant";
import { CategoryCard, Icon, RestaurantCard } from "../../components";

interface OwnProps {}

type Props = OwnProps;

const HomePage: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.container}>
      <div className={style.carouselContainer}>
        <div>
          <div className={style.textOfCarousel}>Crave it? Get it.</div>
          <div className={style.subtextOfCarousel}>
            Here is restaurant we recommended.
          </div>
        </div>

        <div className={style.carousel}>
          <Carousel>
            <Carousel.Item>
              <Icon name={"carousel"} size={[400, 400]} />
            </Carousel.Item>
            <Carousel.Item>
              <Icon name={"carousel"} size={[400, 400]} />
            </Carousel.Item>
            <Carousel.Item>
              <Icon name={"carousel"} size={[400, 400]} />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className={style.categoryBar}>
        {categories.map((category) => (
          <CategoryCard size={8} name={category.name} title={category.title} />
        ))}
      </div>
      <div className={style.divider}></div>
      <div className={style.popular}>
        <div className={style.textDivider}>Popular Near You</div>
        <div className={style.popularContainer}>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              name={restaurant.name}
              rating={restaurant.rating}
              fee={restaurant.fee}
              time={restaurant.time}
              imageURL={restaurant.imageURL}
              size={restaurant.size}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { HomePage };
