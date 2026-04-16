
import Details from "@/app/components/Details";

const DetailsPage = async ({params}) => {
    const {id} = await params ;

        return (
        <div className="my-20">

            <Details id={id}></Details>
        </div>
    );
};

export default DetailsPage;