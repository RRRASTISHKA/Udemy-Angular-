const {writeFileSync, mkdirSync}=require('fs');

require('dotenv').config()


const targetPath='./src/environments/environments.ts';

const envFileContent=`
export const environment={
  mapbox_key: "pk.eyJ1Ijoic295aXZhbm4iLCJhIjoiY2x3cndvOXZoMDB4dTJwczJoMzJwaHo5dSJ9.p-bhwgCK0pHPfe4QqrXo3A",
  otra: "Propiedad",
};
`;

mkdirSync('./src/environments', {recursive: true});

writeFileSync(targetPath, envFileContent);
