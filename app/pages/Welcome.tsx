import { GettingStarted } from '~/components/GettingStarted'
import { Carousel } from '../components/Carousel'
import { TrainingPlansQuiz } from '~/components/TrainingPlansQuiz'
import { TrainingOnlinePlans } from '~/components/TrainingOnlinePlans'
import { ShopProducts } from '~/components/ShopProducts'
import { Moments } from '~/components/Moments'
import { BannerTitle } from '~/components/BannerTitle'
import { FaceToFaceTrainingPlans } from '~/components/FaceToFaceTrainingPlans'
import { FreeClassBanner } from '~/components/FreeClassBanner'
import { FreeClassPopup } from '~/components/FreeClassPopup'
import { useState } from 'react'

export function Welcome() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  return (
    <>
      <div>
        <Carousel />
      </div>
      <div>
        <BannerTitle className="mb-8">BIENVENIDA</BannerTitle>
        <GettingStarted />
      </div>
      <div>
        <BannerTitle className="mb-8">¡CONÓCENOS!</BannerTitle>
        <TrainingPlansQuiz />
      </div>
      <div>
        <BannerTitle className="mb-8">PROGRAMAS ONLINE RECOMENDADOS</BannerTitle>
        <TrainingOnlinePlans />
      </div>
      <div>
        <BannerTitle className="mb-8">PROGRAMAS PRESENCIALES RECOMENDADOS</BannerTitle>
        <FaceToFaceTrainingPlans />
      </div>
      <div className="px-4">
        <FreeClassBanner onClick={openPopup} />
      </div>
      <div>
        <BannerTitle className="mb-8">TIENDA</BannerTitle>
        <ShopProducts />
      </div>
      <div>
        <BannerTitle className="mb-8">MOMENTOS LASTRAINER</BannerTitle>
        <Moments />
      </div>

      <FreeClassPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  )
}
