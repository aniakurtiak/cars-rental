import { useDispatch, useSelector } from "react-redux";
import {selectFavororiteItems } from "../../redux/selectors";
import { useEffect } from "react";
import {fetchFavorites } from "../../redux/adverts/operations";
import { Container, Img, Item, List } from "components/Adverts/Adverts.styled";

const Favorites =() => {
    const dispatch = useDispatch();
  const adverts = useSelector(selectFavororiteItems)

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

    return (
        // <div>{adverts}</div>
        <Container>
      <List>
        {adverts.map(advert => (
          <Item key={advert.id}>
            <div>
              <Img src={advert.img} alt="car" />
            </div>
            <div>
              {advert.make}
              {advert.model}
              {advert.year}
              {advert.rentalPrice}
            </div>
            <div>
              {advert.address}
              {advert.rentalCompany}
              {advert.type}
              {advert.model}
              {advert.id}
            </div>
            {/* <HeartBtn onClick={() => handleFavoriteClick(advert)}>
              <Heart />
            </HeartBtn> */}
          </Item>
        ))}
      </List>
    </Container>
    )
}

export default Favorites;