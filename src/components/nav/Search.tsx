import {
  createStyles,
  IconButton,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useNews } from "../../contexts/NewsContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      paddingBottom: "1rem",
    },
    searchIcon: {
      paddingTop: "0.6rem",
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
      <TextField
        className={classes.search}
        id="input-with-icon-textfield"
        type="search"
        label="Search"
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
