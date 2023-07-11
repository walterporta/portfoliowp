import React from 'react';

const skills = [
  { name: 'JavaScript', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688956194/js_q5wupm.svg' },
  { name: 'MondoDB', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688956387/mongo_bvov9s.svg' },
  { name: 'React JS', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688956385/react_lcn4t6.svg' },
  { name: 'Nex.js', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688956385/next_agbou8.svg' },
  { name: 'Express', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688956385/express_h16fq4.svg' },
  { name: 'Redux', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688956385/redux_dfk8sf.svg' },
  { name: 'Node.js', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688956385/node_ogx7ou.svg' },
  { name: 'TypeScript', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688956383/ts_r1cjmy.svg' },
  { name: 'Boostrap', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1689098011/fjfk34ivxa35bwnsecru.png' },
  { name: 'Auth0', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1689106828/xnlzfoyb9ag9l6eugznp.png' },
  { name: 'Tailwind CSS', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1689106828/abtbjeqrh5qydassqxnv.png' },
    { name: 'Sequelize', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1689106997/rebbozak5z0wklolvrdd.png' },
    { name: 'Vite', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1689106997/xjrfhxuhccmemcl2t2wf.png' },
    { name: 'Formik', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1689106997/xgckbhylsqgn1rt5mu9u.png' },
    { name: 'PostgresSQL', icon: 'https://res.cloudinary.com/dnkaxvkr9/image/upload/v1689108320/t0ekps1urz9fqcqbgoby.png' },
//   { name: '', icon: '' },
//   { name: '', icon: '' },
//   { name: '', icon: '' },
];


const Skill = () => {
    return(
        <div className=' bg-gradient-to-r from-emerald-500  to-blue-300 h-screen items-center
         justify-center' id="skills">
            <br />
            <h1 className="font-bold   text-neutral-800 text-3xl" >HABILIDADES:</h1>
            <br />
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 items-center justify-center">
        
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-2 shadow-sm">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24">
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-cover"/>
                    </div>
                    <span className="mt-1 text-xs sm:text-sm md:text-lg text-center text-black">{skill.name}</span>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Skill;