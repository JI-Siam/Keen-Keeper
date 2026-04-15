
const DetailsPage = async ({params}) => {
    const {id} = await params ;

    const res = await fetch('http://localhost:3000/data.json') ;
    const data =await res.json() ;

    const selectedFriend = data.find(frnd => frnd.id == id) ; 

        return (
        <div>
            Details of user :  {selectedFriend.name}
        </div>
    );
};

export default DetailsPage;