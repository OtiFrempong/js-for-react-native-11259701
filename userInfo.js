function createUserProfiles(names, modifiedNames){
  if (names.length !== modifiedNames.length){
    throw new Error('Both arrays must have the same length');
  }

  return names.map((name, index) => {
    return {
      id: index + 1,
      originalName: name,
      modifiedName: modifiedNames[index]
    };
  })
  }

  const names = ["My", "First", "JS", "Code", "Yayy!"];
  const formattedNames = ["my", "FIRST", "js", "CODE", "yayy!"];

  const userProfiles = createUserProfiles(names, formattedNames);
  console.log(userProfiles);