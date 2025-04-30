import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import { Restaurant } from '../Home'

const Perfil = () => {
  const { id } = useParams()
  const [restaurantFood, setRestaurantFood] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantFood(res))
  }, [id])

  if (!restaurantFood) {
    return <h3>Loading...</h3>
  }
  return (
    <>
      <Header itens={0} />
      <Apresentacao restaurant={restaurantFood} />
      <FoodList restaurant={restaurantFood} />
      <Footer />
    </>
  )
}

export default Perfil
