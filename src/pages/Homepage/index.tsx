import { LectureContainer } from '../../components/LectureContainer';

import * as S from './styles'


export const HomePage = () => {
    return (
        <S.HomepageContainer>
            <S.HomepageContent>
                <LectureContainer></LectureContainer>
            </S.HomepageContent>
        </S.HomepageContainer>
    );
};
