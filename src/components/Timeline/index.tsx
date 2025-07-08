import { LectureContainer } from '../LectureContainer'
import * as S from './styles'


export const Timeline = () => {
    return (
        <S.TimelineContainer>
            <S.TimelineContent>
                <LectureContainer />
            </S.TimelineContent>
        </S.TimelineContainer>
    )
}