var agree=confirm("Do you agree to share your personal information with the site?")==true;

if(agree)
{
    console.log("Name: " + nickname + "\n" + "Height: " + parseInt(heightfeet) + "\'" + parseInt(heightfeetinches) + "\""  + "\n" + "Weight: " + parseFloat(weightlbs));
}
else
{
    console.log("User does not wish to share his/her information.");
}
