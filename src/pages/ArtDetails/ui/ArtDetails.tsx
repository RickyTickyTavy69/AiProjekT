// import {useTranslation} from "react-i18next";
import {memo} from "react";

type ArtDetailsProps = {
  id: string;
};

const ArtDetails = memo(({ id }: ArtDetailsProps): JSX.Element => {
    // const {t} = useTranslation('ArtDetails');

    console.log(id)
  return <>ArtDetails</>;
});

export default ArtDetails;
