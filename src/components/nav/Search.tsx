import {
  createStyles,
  IconButton,
  InputBase,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useNews } from "../../contexts/NewsContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      paddingTop: "0.9rem",
    },
    searchIcon: {
      paddingBottom: "0.4rem",
    },
    hiddenXsDown: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  })
);

const Search = () => {
  const classes = useStyles();

  const { setSearch } = useNews();
  const handleSearch = () => {};

  return (
    <div className={classes.hiddenXsDown}>
      <InputBase
        className={classes.search}
        id="input-with-icon-textfield"
        placeholder="Basic News Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <IconButton edge="start" onClick={handleSearch}>
        <SearchIcon className={classes.searchIcon} />
      </IconButton>
    </div>
  );
};

export default Search;
