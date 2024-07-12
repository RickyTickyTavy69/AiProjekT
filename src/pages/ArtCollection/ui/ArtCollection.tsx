import {memo} from "react";

type ArtCollectionProps = {
    userId: string;
}

const ArtCollection = memo(({
    userId,
                            }: ArtCollectionProps): JSX.Element => {

    console.log(userId);

  return (
        <>
            ArtCollection
        </>

  )
});

export default ArtCollection;
