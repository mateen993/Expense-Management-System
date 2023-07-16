import React from 'react'

interface Props {
    title: string,
    description: string
}

const FeatureCard : React.FC<Props> = ({title,description}) => {
    return (
        <div className="p-2  bg-orange-100 rounded-lg shadow-lg shadow-slate-500" >
        <h1 className="font-extrabold text-orange-400  text-2xl p-2 "  >
        -{title}
        </h1>
        <p className="mt-2 p-2 " >
        {description}
        </p>
    </div>
    )
}

export default FeatureCard
