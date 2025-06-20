
function SkillCard({skill}) {
    console.log("here in skill card",skill)
  return (
    <div className='flex items-center rounded-xl lg:py-4 py-2 mb-3  justify-between border-2 px-4 backdrop-blur-lg'>
        <h3 className='lg:text-2xl text-base text-gray-200 font-bold'>{skill.skill}</h3>
        <progress max="100" value={skill.level * 20} className=' prograss-bar'/>
    </div>
  )
}

export default SkillCard