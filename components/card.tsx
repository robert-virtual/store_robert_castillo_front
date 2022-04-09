import { FC } from 'react'
import { Product } from '../types/models'
interface CardProps {
  product: Product
}

const Card: FC<CardProps> = ({
  children,
  product: { name, description, price, quantity },
}) => {
  return (
    <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-4 text-xl">{description}</p>
      <div className="flex justify-between">
        <span className="text-md mt-4">Precio: ${price}</span>
        <span className="text-md mt-4">Disponible: {quantity}</span>
      </div>
    </div>
  )
}
export default Card
