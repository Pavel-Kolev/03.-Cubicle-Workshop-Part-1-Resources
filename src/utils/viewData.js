exports.difficultyLevelOptionsViewData = (difficultyLevel) => {
  const titles = [
    "Easy",
    "Medium (Standard 3x3)",
    "Intermediate",
    "Expert",
    "Hardcore",
  ];
  const options=titles.map((title,index)=>{
    const number=index+1
    return{
        title:`${number} - ${title}`,
        value:number,
        selected:Number(difficultyLevel)===(number),
    }
  })
  return options;
};
