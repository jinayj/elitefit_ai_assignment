import MainLayout from '@Layouts/MainLayout/MainLayout'
import styles from '@/styles/Home.module.css'
import { Container } from '@Components/Grid'
import { AwardsandRecognitions, Banner, ClientsFeedback, GlobalPresence, InsightsBlogs, LetsConnect, LetsTalk, OurCompany, Services, SuccessStories, TypeYourNeed, UpcomingEvents } from '@Components/Pages/Home'
import Scheduler from '@Components/Pages/Home/Scheduler/Scheduler'

export default function Home() {
  return (
    <MainLayout>
      <Scheduler />
    </MainLayout>
  )
}
