let userrole="admin";
let accessLevel;
if(userrole="admin"){
    accessLevel="Full access guranted"
}
else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);