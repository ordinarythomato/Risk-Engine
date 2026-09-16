import pandas as pd

def load_accidents(filepath: str) -> pd.DataFrame:
    df = pd.read_csv(filepath)

    # To validate columns:
    required = ["id_event", "cost_usd", "date", "category"]
    #In case that any column information is missing:
    missing = [col for col in required if col not in df.columns]
    if missing:
        raise ValueError(f"Missing Columns: {missing}")
    # Date convertion
    df["date"] = pd.to_datetime(df["date"], dayfirst=True)

    #To discard costless rows
    df = df.dropna(subset=["cost_usd"])

    return df
