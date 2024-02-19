import React from 'react'
import CategoryButton from '../CategoryButton/CategoryButton'
import Projects from './Projects';
import Footer from '../Footer/Footer';

const MainProjetcs = ({projects, categories, setFiltered, filtered}) => {
  return (
    <>
        <div className='flex justify-center mt-10 mb-5'>
            <CategoryButton categories={categories} setFiltered={setFiltered} projects={projects} />
        </div>
        <div className='flex justify-center items-center my-5'>
            <Projects filtered={filtered} />
        </div>
        <Footer />
    </>
  )
}

export default MainProjetcs