import React from 'react'
import { NavLink } from 'react-router-dom'

function MenuPart() {
  return (
    <>
    <div className='flex items-center gap-8 md:gap-0 justify-center md:justify-evenly md:items-start flex-col md:flex-row'>
        <table className=' border border-black text-center'>
          <thead className='font-[headline]'>
            <tr>
              <th className='bg-blue-400 w-full text-center text-xl font-bold py-2'>AOT Online</th>
            </tr>
          </thead>
          <tbody className='bg-white font-[para]'>
            <tr className='border-b border-black' >
            <NavLink to={"https://aot.edu.in/industry-4-0-2/"}><td className='py-1 px-4'>Industry 4.0 Center@AOT</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink to={"/Signup"} target='_blank'><td className='py-1 px-4'>AOT Student Portal</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink to={"https://www.aotingenium.com/"} target='_blank'><td className='py-1 px-4'>AOT Web Magazine</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink to={"https://gic.aot.edu.in/index.html"} target='_blank'><td className='py-1 px-4'>Google Innovation Centre</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink><td className='py-1 px-4'>AOT Digital Library</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink to={"http://182.74.215.198/moodle/"} target='_blank'><td className='py-1 px-4'>Moodle Portal Login</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink to={"https://docs.google.com/forms/d/e/1FAIpQLSfht1zbppg8GZW0ZMjuAWo5YU62QJtVl1fZF1ih8QTRS_9Jmg/viewform"} target='_blank'><td className='py-1 px-4'>AOT Grievance Redressal/Feedback</td></NavLink>
            </tr>
          </tbody>
        </table>
        <table className=' border border-black'>
          <thead className='font-[headline]'>
            <tr>
              <th className='bg-green-400 w-full text-center text-xl font-bold py-2'>Admission @AOT</th>
            </tr>
          </thead>
          <tbody className='bg-white font-[para]'>
            <tr className='border-b border-black' >
            <NavLink><td className='py-1 px-12'>Final Admission Status 2019</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink><td className='py-1 px-12'>Final Admission Status 2018</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink><td className='py-1 px-12'>Final Admission Status 2017</td></NavLink>
            </tr>
          </tbody>
        </table>

        <table className=' border border-black text-center'>
          <thead className='font-[headline]'>
            <tr>
              <th className='bg-yellow-500 w-full text-center text-xl font-bold py-2'>Downloads</th>
            </tr>
          </thead>
          <tbody className='bg-white font-[para]'>
            <tr className='border-b border-black' >
              <td className='py-1 px-16 font-semibold'>B. Tech Syllabus</td>
            </tr>
            <tr className='border-b border-black' >
              <td className='py-1 px-16'><NavLink to={"https://makautexam.net/aicte_details/CourseStructure/CSBS20.pdf"} target='_blank'><button>CSBS</button></NavLink> &nbsp;||&nbsp; <NavLink to={'https://makautexam.net/aicte_details/CourseStructure/CSE.pdf'} target='_blank'><button>CSE</button></NavLink> &nbsp;||&nbsp; <NavLink to={'https://makautexam.net/aicte_details/CourseStructure/ECE.pdf'} target='_blank'><button>ECE</button></NavLink> </td>
            </tr>
            <tr className='border-b border-black' >
              <td className='py-1 px-16'><NavLink to={'https://makautexam.net/aicte_details/CourseStructure/EE.pdf'} target='_blank'><button>EE</button></NavLink> &nbsp;||&nbsp; <NavLink to={'efaidnbmnnnibpcajpcglclefindmkaj/https://makautexam.net/aicte_details/CourseStructure/EEE.pdf'} target='_blank'><button>EEE</button></NavLink> &nbsp;||&nbsp; <NavLink to={'https://makautexam.net/aicte_details/CourseStructure/ME.pdf'} target='_blank'><button>ME</button></NavLink></td>
            </tr>
            <tr className='border-b border-black' >
              <td className='py-1 px-16 font-semibold'>M. Tech Syllabus</td>
            </tr>
            <tr className='border-b border-black' >
              <td className='py-1 px-16'><NavLink to={'https://makautexam.net/aicte_details/CourseStructure/MCA20.pdf'} target='_blank'><button>MCA</button></NavLink></td>
            </tr>
            <tr className='border-b border-black' >
              <NavLink to={'https://aot.edu.in/wp-content/uploads/2024/06/Bro_24.pdf'} target='_blank'><td className='py-1 px-16'>e-Brochure 2024</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
              <NavLink to={'https://aot.edu.in/wp-content/uploads/2022/03/ACADEMY-OF-TECHNOLOGY20220216-.pdf'} target='_blank'><td className='py-1 px-16'>NIRF 2022</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
              <NavLink to={'https://aot.edu.in/wp-content/uploads/2023/02/ACADEMY-OF-TECHNOLOGY2023_01_20.pdf'} target='_blank'><td className='py-1 px-16'>NIRF 2023</td></NavLink>
            </tr>
          </tbody>
        </table>

        <table className=' border border-black text-center'>
          <thead className='font-[headline]'>
            <tr>
              <th className='bg-slate-400 w-full text-center text-xl font-bold py-2'>Contacts</th>
            </tr>
          </thead>
          <tbody className='bg-white font-[para]'>
            <tr className='border-b border-black' >
            <NavLink to={'https://aot.edu.in/contact-us/'} target='_blank'><td className='py-1 px-4'>Admission Section</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink to={'https://aot.edu.in/contact-us/'} target='_blank'><td className='py-1 px-4'>Academic Section</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink to={'https://aot.edu.in/contact-us/'} target='_blank'><td className='py-1 px-4'>Administrative Section</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink to={'https://aot.edu.in/contact-us/'} target='_blank'><td className='py-1 px-4'>Accounts Section</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink to={'https://aotfiesta24.tech/'} target='_blank'><td className='py-1 px-4'>Techfiesta || Games Meet || Humatronics</td></NavLink>
            </tr>
          </tbody>
        </table>

        <table className=' border border-black text-center'>
          <thead className='font-[headline]'>
            <tr>
              <th className='bg-orange-400 w-full text-center text-xl font-bold py-2'>Admission Enquiry</th>
            </tr>
          </thead>
          <tbody className='bg-white font-[para]'>
            <tr className='border-b border-black' >
            <NavLink to={'https://aot.edu.in/b-tech-fees-structure/'} target='_blank'><td className='py-1 px-8'>Fees & Deposits</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink to={'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://aot.edu.in/wp-content/uploads/2024/06/Documents-for-admission.pdf'} target='_blank'><td className='py-1 px-8'>Documents for Admission</td></NavLink>
            </tr>
            <tr className='border-b border-black' >
            <NavLink><td className='py-1 px-8'>Documents for Physical Reporting</td></NavLink>
            </tr>
          </tbody>
        </table>
    </div>
    </>
  )
}

export default MenuPart