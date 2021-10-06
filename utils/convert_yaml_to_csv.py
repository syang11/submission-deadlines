import csv
import yaml


def convert_yaml_to_csv(yaml_path, csv_path):
    with open(yaml_path) as f:
        data = yaml.load(f, Loader=yaml.SafeLoader)
    keys = data[0].keys()
    with open(csv_path, 'w', newline='') as output_file:
        dict_writer = csv.DictWriter(output_file, keys)
        dict_writer.writeheader()
        dict_writer.writerows(data)


if __name__ == '__main__':
    # convert_yaml_to_csv("../_data/conferences.yml", "../_data/conferences.csv")
    convert_yaml_to_csv("../_data/types.yml", "../_data/types.csv")
