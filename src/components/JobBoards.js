import React from "react";

const JobBoards = ({ 
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
}) => {

  const langAndTools = [];

  if(languages){
    langAndTools.push(...languages)
  }

  if(tools){
    langAndTools.push(...tools)
  }

  return (
    <div className="flex bg-white shadow-lg my-8 p-5">
      <div>
        <img src={logo} alt={company} />
      </div>
      <div className="flex flex-col justify-between ml-5">
        <h3 className="font-bold text-indigo-300">{company}</h3>
        <h2 className="font-bold text-xl">{position}</h2>
        <p className="text-gray-500 py-3">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex items-center justify-center mx-12">
        {
          langAndTools ? (
            langAndTools.map((langAndTools) => <span className="bg-indigo-50 text-pink-500  rounded p-2 m-3">{langAndTools}</span> )
          ) : ''
        }
      </div>
    </div>
  );
};

export default JobBoards;
