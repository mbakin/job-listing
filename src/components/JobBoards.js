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
  handleTagClick
}) => {
  const tags = [role, level];

  if (languages) {
    tags.push(...languages);
  }

  if (tools) {
    tags.push(...tools);
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-md w-4/5 my-16 mx-auto p-6 rounded ${
        featured && "border-l-4 border-green-500 border-solid"
      } lg:flex-row`}
    >
      <div>
        <img
          className="w-20 h-20 -mt-16 mb-4 lg:mt-0 lg:h-24 lg:w-24 lg:my-0"
          src={logo}
          alt={company}
        />
      </div>
      <div className="flex flex-col justify-between ml-2">
        <h3 className="font-bold text-indigo-300">
          {company}
          {isNew && (
            <span className="bg-pink-600 text-white  rounded-full py-1 px-2  m-2 uppercase text-sm">
              New
            </span>
          )}
          {featured && (
            <span className="bg-green-500 text-white  rounded-full py-1 px-2 uppercase  text-sm">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2">{position}</h2>
        <p className="text-gray-500 py-3">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4  pt-4 border-t border-gray-200 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0 lg:items-center">
        {tags
          ? tags.map((tag) => (
              <span onClick={() => handleTagClick(tag)} className="cursor-pointer bg-indigo-50 hover:bg-green-50 text-pink-500  rounded p-1 mb-4 mr-4 lg:mb-0">
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoards;
