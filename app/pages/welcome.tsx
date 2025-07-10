import { GettingStarted } from "~/components/GettingStarted";
import { Carousel } from "../components/Carousel";
import { TrainingPlansQuiz } from "~/components/TrainingPlansQuiz";
import { TrainingPlans } from "~/components/TrainingPlans";
import { ShopProducts } from "~/components/ShopProducts";
import { Services } from "~/components/Services";
import { BannerTitle } from "~/components/BannerTitle";

export function Welcome() {
  return (
    <>
    <div>
      <BannerTitle className="mb-8">OLYMPIC WEIGHTLIFTING PROGRAMS</BannerTitle>
      <Carousel />
    </div>
    <div>
      <GettingStarted />
    </div>
    <div>
      <BannerTitle className="mb-8">GET TO KNOW YOU!</BannerTitle>
      <TrainingPlansQuiz />
    </div>
    <div>
      <BannerTitle className="mb-8">BETSELLING PROGRAMS</BannerTitle>
      <TrainingPlans />
    </div>
    <div>
      <BannerTitle className="mb-8">STORE</BannerTitle>
      <ShopProducts />
    </div>
    <div>
      <BannerTitle className="mb-8">SERVICES LASTRAINER</BannerTitle>
      <Services />
    </div>
    </>
  );
}