import PropTypes from "prop-types";
import { Section, Header, Stats, Item, Value} from "./Statistics.styled";
export const Statistics=({ stats, title }) => (
    <Section >
    {title && <Header>{title}</Header>}
    <Stats>
    {stats.map(({id, label, percentage}) => (
        <Item key={id}>
            <span>{label}</span>
            <Value>{percentage}</Value>
        </Item>
    ))}
  </Stats>
</Section>
)
Statistics.propTypes={
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired,
        })
    )
}